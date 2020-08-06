const getGithubData=async()=>{
    const githubDataPromise=await fetch('https://api.github.com/users/dimlil')
    const data=githubDataPromise.json()
    return data
}

export default getGithubData