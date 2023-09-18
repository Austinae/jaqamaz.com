import { Helmet } from 'react-helmet'

const PageTitle = ({ title }) => (
  <Helmet>
    <title>{`${title} | Jaqâmaz`}</title>
  </Helmet>
)

export default PageTitle
