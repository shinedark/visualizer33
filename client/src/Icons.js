/* eslint-disable no-undef */
function icons(cb) {
  return fetch(`api/icons`, {
    accept: 'application/json',
  }).then((response) => { 
  		return response.json(); 
  }).then((data) => { return data; 
  }).then(cb);
}

const Icons = { icons };
export default Icons;
