const StorysList = ({stories}) => {



    const storyOptions = stories.map((story, index, url) => {
        return <li key={index}>
                <a href={story.url}>{story.title}</a>
                </li>
    })
  
    return (
        <>
        <ul>
            {storyOptions}
        </ul>
        </>
    )
}

export default StorysList;

