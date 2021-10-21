import React, {useState, useEffect} from 'react';
import StorysList from '../components/storysList'
import UserFilterRequest from '../components/UserFilterRequest';

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
            const first20Articles = articleIDs.slice(0, 20)
            const articlePromises = first20Articles.map((articleID) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${articleID}.json`)
                .then(response => response.json())
            })
            Promise.all(articlePromises).then((allData) => {setStories(allData)})
        })
    }

    useEffect(() =>{
        getStories()
    }, [])

    const onFormSubmit = (searchTerm) => {
        console.log(searchTerm) 
        let filteredList = []
        filteredList = stories.filter(story => story.title.includes("look"))
        console.log(filteredList)
    }
    // filteredList = stories.filter(story => story.title.includes(searchTerm.value))
    // const filteredStories = () => {
    //     const filteredList = []
    //     return console.log(filteredList = stories.filter(searchTermPresent))
    //     // 
    // }
      
    //     // return console.log(filteredList = stories.filter(story, searchTerm => 
    //     //     //     story.title.includes(searchTerm)))

    // const searchTermPresent = (story, searchTerm) => {
    //     return story.title.includes(searchTerm)
    // }

    return (
        <>
            <h2> Hacker News:</h2>
            <StorysList stories={stories} />
            <UserFilterRequest stories={stories} onFormSubmit={onFormSubmit}/>
            {/* {searchTerm ? <FilteredList /> :null} */}
        </>
    )

}

export default HackerContainer;


