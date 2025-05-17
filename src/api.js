import axios from "axios";

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=ALUL-ds_ntETw-6J9X1ptOK05kDyIK-2Xx34uffz4OI'

    const response = await axios.get(url, {
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages