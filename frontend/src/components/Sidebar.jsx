import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div>
      <SearchInput/>
      <div className="divider px-3">
        {/* <Conversation/>
        <LogoutButton/> */}
      </div>
    </div>
  );
}

export default Sidebar;
