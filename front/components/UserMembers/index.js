import { Member, MemberName, MemberProfile } from "./style";

const UserMembers = ({ members }) => {
  return (
    <Member>
      <MemberProfile>{members.nickname[0]}</MemberProfile>
      <MemberName>{members.nickname}</MemberName>
    </Member>
  );
}

export default UserMembers;
