import { Helmet } from "react-helmet"

export const FSHelmet = ({ title, metaList }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {metaList && metaList ? metaList : null}
    </Helmet>
  )
}