import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  throwpillowcover: 1,
  placemat: 2,
  tablerunner: 3,
  apron: 4,
};

const selectShop = (state) => state.shop;
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
