import { Col, Input, Pagination, Row, Space } from "antd";
import { useState } from "react";
import { FSButton, FSInput, FSInputPassword, FSPagination, FSStatistic, FSTable, FSTabs, FSTextArea, FSTextEditor } from "../../components";
import { SVGIcon } from "../../utils";
import './StyleGuide.css';
import { tableColumnTitleDashboard } from "../../components/FSTable/FSTableDataContents/FSTableColumns";
import { tableColumnDataDashboard } from "../../components/FSTable/FSTableDataContents/FSTableDataSource";

const StyleGuide = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return (
        <>
          <a className="fs-prev-btn fs-direction-btn">
            <span className="fs-previous-arrow fs-direction-arrows">
              {SVGIcon.FSicon_Linear_Arrow_Left}
            </span>
            <span>Previous</span>
          </a>
        </>
      );
    }
    if (type === 'next') {
      return (
        <>
          <a className="fs-next-btn fs-direction-btn">
            <span>Next</span>
            <span className="fs-next-arrow fs-direction-arrows">
              {SVGIcon.FSicon_Linear_Arrow_Right}
            </span>
          </a>
        </>
      );
    }
    return originalElement;
  };

  const tabList = [
    {
      key: '1',
      label: "Privacy Policy",
      children: `Privacy Policy`,
    },
    {
      key: '2',
      label: "FAQ’s",
      children: `FAQ’s`,
    },
    {
      key: '3',
      label: "Terms & Conditions",
      children: `Terms & Conditions`,
    },
  ]
  return (
    <>
      <div className="container mx-auto my-5 px-3">
        <Row gutter={[20, 40]} className="shb-icon-grid">
          {
            Object.entries(SVGIcon).map((item, index) => {
              const copyContent = async () => {
                try {
                  await navigator.clipboard.writeText(`{SVGIcon.${item[0]}}`);
                  setCopySuccess(`Copied icon: ${item[0]}`);
                  setTimeout(() => {
                    setCopySuccess(false);
                  }, 3000);
                  console.log('Content copied to clipboard');
                } catch (err) {
                  console.error('Failed to copy: ', err);
                }
              };
              return (
                <Col span={3} key={index} >
                  <div className="shb-icon-box pointer flex-center d-flex align-center justify-center flex-column gap-1" title="Click To Copy Icon Name" onClick={() => copyContent()}>

                    <div className="shb-icon-icon flex-center contain-image" style={{ width: "24px", height: "24px", }}>{item[1]}</div>
                    <div className="shb-icon-name word-break text-center">{item[0]}</div>

                    <span className={`${copySuccess ? "active d-block" : "d-none"} position-fixed`} style={{ top: '50%', left: "50%", backgroundColor: "#000", color: "#FFF", zIndex: 99, padding: '25px', borderRadius: '12px', transform: "translate(-50%, -50%)", }}>
                      {copySuccess}
                    </span>
                  </div>
                </Col>
              )
            })
          }
        </Row>

        <div className="mt-10" style={{ width: "1464px", margin: "auto" }}>
          <FSTable
            id="fsTable"
            name="FS Table"
            dataTestId="fs-table"
            tableColumn={tableColumnTitleDashboard}
            tableDataSource={tableColumnDataDashboard}
            pagination={false}
            scroll={{
              x: 1299,
            }}
            responsive={true}
          >
          </FSTable>
          {/* <Pagination
            defaultCurrent={1}
            total={3000}
            className='fs-pagination'
            defaultPageSize={5}
            showSizeChanger
            itemRender={itemRender}
          /> */}
          <FSPagination
            total={300}
          />
        </div>

      </div >

      <div className="container">
        <Space size={[8, 16]} wrap>
          <FSStatistic
            isOnlyStatistics={true}
            isCardBlock={true}
            icon={SVGIcon.FSicon_Solid_User}
            iconWrapperClass=""
            label="Total User"
            numbers="21.5k"
          />
          <FSStatistic
            isOnlyStatistics={true}
            isCardBlock={true}
            icon={SVGIcon.FSicon_Solid_UserAdd}
            iconWrapperClass=""
            label={<>New User <span className="h6">(This Month)</span></>}
            numbers="1.7k"
          />
          <FSStatistic
            isOnlyStatistics={true}
            isCardBlock={true}
            icon={SVGIcon.FSicon_Solid_Cube}
            iconWrapperClass=""
            label={<>New Products <span className="h6">(This Month)</span></>}
            numbers="2.5k"
          />
          <FSStatistic
            isOnlyStatistics={true}
            isCardBlock={true}
            icon={SVGIcon.FSicon_Solid_Shapes}
            iconWrapperClass=""
            label="Total Categories"
            numbers="23"
          />
        </Space>
        <FSPagination
          total={300}
        />

        <div className="my-5" style={{padding: "10px", border: "1px solid"}}>
          <h1 className="text-center mb-4">BUTTONS</h1>
          <FSButton isLarge isHoverShineDark className="mb-3">
            large dark-shine
          </FSButton>

          <FSButton isSmall isHoverShineLight className="mb-3">
            small light-shine
          </FSButton>

          <FSButton isTableBtn isError isExtraSmall isHoverShineDark className="mb-3">
            extra-small dark-shine error Reject
          </FSButton>

          <FSButton isTableBtn isSuccess isExtraSmall isHoverShineDark className="mb-3">
            extra-small dark-shine success Approve
          </FSButton>

          <FSButton isTableBtn isBordered isExtraSmall isHoverShineDark icon={SVGIcon.FSicon_Linear_Arrow_Down} className="mb-3">
            extra-small dark-shine bordered with-icon
          </FSButton>

          <FSButton isLarge isHoverShineLight isDanger>Delete Now</FSButton>
        </div>

        <FSInput
          id="fsInput"
          name="Fs Input"
          dataTestId="fs-input"
          placeholder="Ex. xyz@domain.com"
          className="fs-input fs-input-sm fs-input-dark"
          mainWrapperClass="fs-input-wrapper"
        />

        <FSInput
          id="fsInput"
          name="Fs Input"
          dataTestId="fs-input"
          placeholder="Ex. xyz@domain.com"
          className="fs-input fs-input-lg fs-input-dark"
          mainWrapperClass="fs-input-wrapper"
        />

        <FSInput
          id="fsInput"
          name="Fs Input"
          dataTestId="fs-input"
          placeholder="Ex. xyz@domain.com"
          className="fs-input fs-input-lg fs-input-light"
        />

        <FSInput
          id="fsInput"
          name="Fs Input"
          dataTestId="fs-input"
          placeholder="Ex. xyz@domain.com"
          className="fs-input fs-input-lg fs-input-prefix fs-input-light"
          prefix={SVGIcon.FSicon_Linear_Dashboard}
        />

        <FSInput
          id="fsInput"
          name="Fs Input"
          dataTestId="fs-input"
          placeholder="Ex. xyz@domain.com"
          className="fs-input fs-input-lg fs-input-prefix fs-input-light"
          suffix={SVGIcon.FSicon_Linear_Dashboard}
        />

        <FSInputPassword
          id="fsPasswordInput"
          name="Fs Password Input"
          dataTestId="fs-password-input"
          placeholder="Password"
          className="fs-password-input fs-input-lg"
        />

        <Input.Password
          prefix={SVGIcon.FSicon_Linear_Dashboard}
        />

        <div className="my-5" style={{ padding: "10px", border: "1px solid" }}>
          <h1 className="text-center mb-4">TAB</h1>
          <FSTabs
            tabExtraContentEnd={<>
              <h3>extra content</h3>
            </>}
            tabItems={tabList}
          />
        </div>

        <div className="my-5" style={{ padding: "10px", border: "1px solid" }}>
          <h1 className="text-center mb-4">TEXTAREA</h1>
          <FSTextArea placeholder="write here" label="Answer" />
        </div>

        <div className="my-5" style={{ padding: "10px", border: "1px solid" }}>
          <h1 className="text-center mb-4">TEXTEDITOR</h1>
          <FSTextEditor label="Describe the policy of Nitinn Toss Book" />
        </div>

      </div>
    </>
  )
}

export default StyleGuide