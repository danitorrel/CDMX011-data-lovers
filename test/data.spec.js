//import data from '../src/data/rickandmorty/rickandmorty.js';

import { femalesMock, statusMock } from '../src/data/rickandmorty/rickandmortyMock.js';

import { filterGender, filterStatus } from '../src/data.js';

const charactersF = femalesMock;

 describe('testing filter by gender', () => {
  
  it('should be a function', () => {
    expect(typeof filterGender).toBe('function');
  });

/*  it('should contain the name of a female character', () => {
    expect(filterGender(charactersF, )).;
  }); */ 


  /* it('should contain the property gender female', () => {
    expect(filterGender(characters[''])).toHaveProperty('gender', 'female');
  });
 */
  /* it('should contain a male character', () =>{
    
  }) */
}); 



describe('testing filter by status', () => {
  
  const statusM = statusMock;

  it('should be a function', () => {
    expect(typeof filterStatus).toBe('function');
  });

  it('return only unknown characters', () => {
    expect(filterStatus(statusM, 'unknown')).toHaveLength(2);
  }); 
 
  it ('is not Null', () => {
    const result = filterStatus(statusM, 'Dead', true, statusM);

   expect(result).not.toBeNull();
 }); 

 /*  it ('return a dead character without previous filter', () => {
     const result = filterStatus(statusM, 'Dead', true, statusM);

    expect(result).toContain('Adjudicator Rick')
  }); */ 
  

});


/* it ('should contain the name of a female character', () => {
  expect(filterGender(charactersF, 'Female')).toContain('Abadango Cluster Princess')
  
}); */