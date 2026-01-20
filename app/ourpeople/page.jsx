import OurPeopleSection from "../Components/OurPeople/OurPeopleSection";
import LeadershipBoard from "../Components/OurPeople/LeadershipBoard";
import PeopleHighlight from "../Components/OurPeople/PeopleHighlight";
import { leadershipTeam, boardMembers, financeTeam } from "../Components/data/leader";

export default function OurPeoplePage() {
    return (
        <div className="bg-[#F8F9FA] pb-20">
            <OurPeopleSection />
            <PeopleHighlight />

            <div className="space-y-10">
                <LeadershipBoard
                    title="Meet Our Leadership Board"
                    leaders={leadershipTeam}
                />

                <LeadershipBoard
                    title="Meet Our Advisory Board"
                    leaders={boardMembers}
                />

                <LeadershipBoard
                    title="Meet Our Management Board"
                    leaders={financeTeam}
                />
            </div>
        </div>
    );
}