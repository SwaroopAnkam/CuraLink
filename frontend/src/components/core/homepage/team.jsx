import { team } from '../../../data/dummydata';
import LeadsCard from '../../common/cards/leadscard';
import MembersCard from '../../common/cards/memberscard';

export default function Team() {
  return (
    <div id="team" className="outfit-400 mt-[4vw] mb-[8vw] w-[80%] mx-auto">
      {/* Team Title */}
      <div className="w-full text-[3vw] text-center font-serif italic tracking-wide text-blue-400">
        - Team
      </div>

      {/* Leads Section */}
      <div className="leads">
        <div className="cards flex flex-wrap justify-center gap-[4vw] p-[2vw]">
          {team?.leads.map((data, i) => (
            <LeadsCard data={data} key={i} />
          ))}
        </div>
      </div>

      {/* Members Section */}
      <div className="members mt-[4vw]">
        <div className="w-full text-[2vw] text-center font-serif italic tracking-wide text-blue-400">
          - Members
        </div>
        <div className="cards flex flex-wrap justify-center gap-[4vw] p-[2vw]">
          {team?.members.map((data, i) => (
            <MembersCard data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
