import React, { useEffect,Fragment, useContext} from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'

import {Link} from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'


const User = ({match}) =>{
  const githubContext = useContext(GithubContext);

  const { getUser, user, loading ,getUserRepos,repos} = githubContext

  useEffect(() =>{
    getUser(match.params.login)
    getUserRepos(match.params.login)
   // eslint-disable-next-line
  },[]);

 
 

   
    const {name,company,avatar_url,location,bio,login,html_url,blog,followers,following,public_repos,public_gists,hireable} = user
     
     if(loading) return <Spinner /> 
    return (
      <Fragment>
           <Link to='/' className='btn btn-light'>Back to Search Results</Link>
           Hireable: {hireable ? 'Yes':"NO" }
           <div className="card grid-2">
            <div className="all-center">
              <img src={avatar_url} alt="Profile Picture" className='round-img' style={{width:'150px'}} />
              <h1>{name}</h1>
              {location && (
                <Fragment>
                        <h3>Location:{location}</h3>
                </Fragment>
              )}
              
            </div>
            <div>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className='btn btn-dark m-1' target="_blank" rel="noreferre">GitHub Profile</a>
              <ul>
                <li>
                  {login &&(
                    <Fragment>
                      Username:{login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      Company:{company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      Website:{blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
           </div>
           <div className='card text-center'>
            <div className="badge badge-primary">Followers:{followers}</div>
            <div className="badge badge-success">Following:{following}</div>
            <div className="badge badge-light">Public Repos:{public_repos}</div>
            <div className="badge badge-dark">Public Gists:{public_gists}</div>
           </div>

           <Repos repos={repos} />
      </Fragment>
    )
  
}


 

export default User
