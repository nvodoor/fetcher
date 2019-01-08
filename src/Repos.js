import React from 'react';

const repoStyle = {
  height: '150px',
  width: '200px',
  border: '2px solid black',
  backgroundColor: 'lightgrey',
  margin: '20px',
  padding: '20px'
}

const Repos = ({name, size, stargazers }) => {
  return (
    <div style={repoStyle}>
       <h2>Github Repo</h2>
       <p>User: {name}</p>
       <p>Size: {size}</p>
       <p>Stargazers: {stargazers}</p>
    </div>
  )
}

export default Repos;