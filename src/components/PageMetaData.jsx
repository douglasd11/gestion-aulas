import { Helmet } from "react-helmet-async";
const PageMetaData = ({
  // eslint-disable-next-line react/prop-types
  title
}) => {
  return <Helmet>
      <title> {title} | Attex React - Responsive MUI Admin Dashboard </title>
    </Helmet>;
};
export default PageMetaData;