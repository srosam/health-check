using System;
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
    }
}