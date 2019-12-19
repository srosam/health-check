using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace tht.Hubs
{
    public class Chat : Hub
    {
        public async Task Send(string message, string name)
        {
            await Clients.All.SendAsync("Send", name, message);
        }
    }
}