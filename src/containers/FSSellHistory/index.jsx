import { FSHelmet, FSInput, FSTable } from "../../components"
import { DashboardLayout } from "../../layouts"
import { SVGIcon } from "../../utils";
import { tableColumnTitleSellHistory } from "../../components/FSTable/FSTableDataContents/FSTableColumns";
import { tableColumnDataSellHistory } from "../../components/FSTable/FSTableDataContents/FSTableDataSource";

const FSSellHistory = () => {
  return (
    <>
      <FSHelmet title="Sell History | Nitinn Toss Book" />
      <DashboardLayout contentWrapperClass={`fs-body-padding`}>
        <div>
          <div className="fs-page-section-header">
            <div className="fs-page-section-header-title">
              <h2 className="fw-600">Sell History</h2>
            </div>
            <div>
              <FSInput
                id="fsInputSearch"
                name="Fs Input Search"
                dataTestId="fs-input-search"
                placeholder="Search here..."
                isSmall
                isDark
                isSearch
                prefix={SVGIcon.FSicon_Linear_Search}
              />
            </div>
          </div>
          <div className="fs-table-container">
            <FSTable
              id="fsTable"
              name="FS Table"
              dataTestId="fs-table"
              tableColumn={tableColumnTitleSellHistory}
              tableDataSource={tableColumnDataSellHistory}
              scroll={{
                x: 1099
              }}
              responsive={true}
            />
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default FSSellHistory