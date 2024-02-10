import { Button, Dropdown } from "antd"

export const FSDropdown = ({
  dropTitle,
  ...Rest
}) => {
  return (
    <div className="">
      <Dropdown
        {...Rest}
      >
        <Button>
          <span className=""><span className="">Profile</span></span>
          {dropTitle}
          <span className=""><span className="">Profile</span></span>
        </Button>
      </Dropdown>
    </div>
  )
}