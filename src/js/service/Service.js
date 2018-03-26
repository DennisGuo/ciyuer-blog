import Axios from 'axios';

//授权
Axios.defaults.headers.common['Authorization'] = 'Basic '+btoa('a:a');

const URI = 'http://ciyuer.com/api/blog';

class Service {

    /**
     * 保存文章
     * @param {*} payload 
     * @param {*} callback 
     */
    static saveArticle(payload,callback){
        var url = URI + '/article';
        payload['time'] = new Date();
        Axios.post(url,payload).then(callback);
    }

    /**
     * 根据ID获取文章
     * @param {*} id 
     * @param {*} callback 
     */
    static getArticle(id,callback){
        var url = URI + '/article/'+id;
        Axios.get(url).then(callback);
    }

    /**
     * 分页获取数据
     * @param {*} page 
     * @param {*} limit 
     * @param {*} filter 
     * @param {*} sort 
     * @param {*} callback 
     */
    static getArticles(page,limit,filter,sort,callback){
        page = page >0 ? page : 1;
        limit = limit > 0 ? limit : 10;

        var url = URI + '/article?count&page='+page+'&pagesize='+limit+"&hal=f&np";
        if(filter){
            url+='&filter='+filter;
        }
        if(sort){
            url += '&sort='+sort;
        }

        Axios.get(url).then(callback);
    }

    
}

export default Service;