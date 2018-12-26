import reducer from '../../reducers/ProductList';
import * as constants from '../../ActionTypes/ProductList';
import reducers from '../../reducers';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        limit: 2,
        page: 1,
        products: []
      }
    )
  })

  it('should handle SET_PAGE', () => {
    expect(
      reducer([reducer.initialState], {
        type: constants.SET_PAGE,
          payload: 2      
      })).toEqual({
      ...reducer.initialState,
      page: 2
    })
  });

  test('reducers', () => {
    let state;
    state = reducers(
      {ProductList:{limit:2,page:1,products:[]},ProductPage:{},errorReducer:'',Cart:[]},
      {
      type:'ADD_ITEM',
      payload:{
        products:[{id:1,title:'«Номер 5»',author:'Джексон Поллок',year:1948,image:'http://www.topnews.ru/upload/photo/69ead639/855b9.jpg',price:140000000},
        {id:2,title:'«Женщина III»',author:'Виллем де Кунинг',year:1953,image:'http://www.topnews.ru/upload/photo/69ead639/4b92b.jpg',price:137500000}
      ]}});
    expect(state).toEqual(
      {ProductList:{limit:2,page:1,products:[
        {id:1,title:'«Номер 5»',author:'Джексон Поллок',year:1948,image:'http://www.topnews.ru/upload/photo/69ead639/855b9.jpg',price:140000000},
        {id:2,title:'«Женщина III»',author:'Виллем де Кунинг',year:1953,image:'http://www.topnews.ru/upload/photo/69ead639/4b92b.jpg',price:137500000}
        ]},ProductPage:{},errorReducer:'',Cart:[]});
  });
})
