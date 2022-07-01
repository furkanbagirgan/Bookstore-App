export default (state,action)=>{
  switch(action.type){
    case "Add_Favorite":
      const {newFavorite}=action.payload;
      const isExisted=state.favorites.find((item)=>item.isbn13===newFavorite.isbn13);
      if(isExisted){
        return state;
      }
      else{
        return {...state,favorites:[...state.favorites,newFavorite]};
      }
    case "Remove_Favorite":
      const {removeFavoriteId}=action.payload;
      const newfavorites=state.favorites.filter((item)=>item.isbn13 !== removeFavoriteId);
      return {...state,favorites:[...newfavorites]};
    default:
      return state;
  }
}