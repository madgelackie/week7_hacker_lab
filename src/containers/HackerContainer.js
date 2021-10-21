import React, {useState, useEffect} from 'react';
import StorysList from '../components/storysList'

const HackerContainer = () => {

    const [stories, setStories] = useState([])
    // const [index, setIndex] =useState([])

    // const getIndex = () => {
    //     fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    //     .then(response => response.json())
    //     .then(data => {setIndex(data)})
    // }
    // const getStories = () => {
    //     fetch('https://hacker-news.firebaseio.com/v0/item/{storyId}.json')
    //     .then(response => response.json())
    //     .then(data => {setStories(data)})
    // }

    const getStories = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(response => response.json())
        .then(articleIDs => {
            const firstTenArticles = articleIDs.slice(0, 10)
            const articlePromises = firstTenArticles.map((articleID) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${articleID}.json`)
                .then(response => response.json())
            })
            Promise.all(articlePromises).then((allData) => {setStories(allData)})
        })

        
    }



    useEffect(() =>{
        getStories()

    }, [])

    // useEffect(() => {
    //     getIndex()
    // }, [])

    return (
        <>
            <h2> Hacker News:</h2>
            <StorysList stories={stories} />
            {/* <FilterByForm stories={stories}  handelChange={handelChange} /> */}
            <form >
                <label>
                    Filter by:
                    <input type="text" id="formInput"></input>
                </label>
            </form>
        </>
    )

}

export default HackerContainer;


