using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using tht.Models;

namespace tht.Hubs
{
    public class PushNotifier : IPushNotifier
    {
        private readonly IHubContext<HealthCheckHub> _context;

        public PushNotifier(IHubContext<HealthCheckHub> context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task SendVoteUpdate(VoteModel voteModel)
        {
            var votesJson = JsonConvert.SerializeObject(voteModel);
            await _context.Clients.All.SendAsync("SendVotes", votesJson);
        }

        public async Task SendMemberJoined(string name)
        {
            await _context.Clients.All.SendAsync("MemberJoined", name);
        }

        public async Task SendEnableVoting()
        {
            await _context.Clients.All.SendAsync("VotingEnabled");
        }

        //public async Task SendAttendees(List<Attendee> attendees)
        //{
        //    var attendeesJson = JsonConvert.SerializeObject(attendees);

        //    await _context.Clients.All.SendAsync("Attendees", attendeesJson);
        //}
    }
}