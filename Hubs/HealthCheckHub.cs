using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using tht.Models;

namespace tht.Hubs
{
    public class HealthCheckHub : Hub
    {
        public async Task SendVoteUpdate(VoteModel votes)
        {
            var votesJson = JsonConvert.SerializeObject(votes);

            await Clients.All.SendAsync("SendVote", votesJson);
        }

        public async Task SendClear()
        {
            await Clients.All.SendAsync("SendClear");
        }

    }
}