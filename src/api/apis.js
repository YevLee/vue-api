import { post } from '../axiosconfig/axiosconfig'

var getNews =  function getNews(params) {
    return post('/satinApi', params)
  }
  
var getPic = function getPic(params) {
  return post('/satinApi', params)
  }
 
 export default{
	 getNews,
	 getPic
 }