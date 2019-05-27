//ACTIONS

const GET_PROJECTILES = 'GET_PROJECTILES';
const ADD_PROJECTILE = 'ADD_PROJECTILE';
const UPDATE_PROJECTILE = 'UPDATE_PROJECTILE';

//Action Creators
export const addProjectile = projectile => {
  return {
    type: ADD_PROJECTILE,
    projectile,
  };
};

export const addProjectile = projectile => {
  return {
    type: GET_PROJECTILES,
    projectile,
  };
};


export const updateProjectile = projectile => {
  return {
    type: UPDATE_PROJECTILE,
    projectile,
  };
};