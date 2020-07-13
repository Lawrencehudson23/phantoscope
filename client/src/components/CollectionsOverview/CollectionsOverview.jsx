import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./CollectionsOverview.less";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { selectShopCollections } from "../../redux/shop/shopSelectors";
const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {" "}
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});
export default connect(mapStateToProps)(CollectionsOverview);
