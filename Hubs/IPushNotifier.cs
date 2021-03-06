﻿using System.Collections.Generic;
using System.Threading.Tasks;
using tht.Models;

namespace tht.Hubs
{
    public interface IPushNotifier
    {
        Task SendVoteUpdate(VoteModel voteModel);
        Task SendMemberJoined(string name);
        //Task SendAttendees(List<Attendee> attendees);
    }
}