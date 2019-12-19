using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using tht.Hubs;
using tht.Models;

namespace tht.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VoteController : ControllerBase
    {
        private readonly IPushNotifier _pushNotifier;
        private static readonly Dictionary<string, string> Votes = new Dictionary<string, string>();
        public List<Attendee> Attendees { get; set; }

        public VoteController(IPushNotifier pushNotifier)
        {
            _pushNotifier = pushNotifier ?? throw new ArgumentNullException(nameof(pushNotifier));
        }

        [HttpPost("Join")]
        public async Task MemberJoin([FromBody] string name)
        {
            Attendees.Add(new Attendee {Name = name});

            await _pushNotifier.SendMemberJoined(name);
            //await _pushNotifier.SendAttendees(Attendees);
            await SendVoteUpdateToAllClients();
        }
        
        [HttpPost]
        public async Task ClientSendVote([FromBody] VoteSubmitModel voteSubmission)
        {
            if (Votes.ContainsKey(voteSubmission.Name))
                Votes.Remove(voteSubmission.Name);

            Votes.Add(voteSubmission.Name, voteSubmission.Vote);

            await SendVoteUpdateToAllClients();
        }

        [HttpPost("Clear")]
        public async Task ClearVotes()
        {
            Votes.Clear();

            await SendVoteUpdateToAllClients();
        }

        private async Task SendVoteUpdateToAllClients()
        {
            var happyCount = Votes.Count(x => x.Value.Equals("happy"));
            var mehCount = Votes.Count(x => x.Value.Equals("meh"));
            var sadCount = Votes.Count(x => x.Value.Equals("sad"));

            await _pushNotifier.SendVoteUpdate(new VoteModel
            {
                Happy = happyCount,
                Meh = mehCount,
                Sad = sadCount
            });
        }
    }
}
