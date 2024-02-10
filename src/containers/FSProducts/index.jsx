import { FSHelmet, FSInput, FSTable } from "../../components"
import { DashboardLayout } from "../../layouts"
import { SVGIcon } from "../../utils"
import { tableColumnTitleProducts } from "../../components/FSTable/FSTableDataContents/FSTableColumns"
import { tableColumnDataProducts } from "../../components/FSTable/FSTableDataContents/FSTableDataSource"

const FSProducts = () => {

  return (
    <>
      <FSHelmet title="Products | Nitinn Toss Book" />
      <DashboardLayout contentWrapperClass={`fs-body-padding`}>
        <div>
          <div className="fs-page-section-header">
            <div className="fs-page-section-header-title">
              <h2 className="fw-600"> All Products</h2>
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
              tableColumn={tableColumnTitleProducts}
              tableDataSource={tableColumnDataProducts}
              pagination={false}
              scroll={{
                x: 1099,
              }}
              responsive={true}
            />

          </div>

        </div>
      </DashboardLayout>
    </>
  )
}

export default FSProducts