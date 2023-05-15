interface IDataProps {
    name: string;
    email: string;
    lastLogin: string;
    imageUrl: string;
    status: string;
    role: string;
}

const compareByNameAsc=( a:IDataProps, b:IDataProps)=> {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
}
const compareByNameDesc=( a:IDataProps, b:IDataProps) =>{
    if ( a.name > b.name ){
      return -1;
    }
    if ( a.name < b.name ){
      return 1;
    }
    return 0;
}
const compareByLastLoginAsc=( a:IDataProps, b:IDataProps)=> {
    if ( a.lastLogin < b.lastLogin ){
      return -1;
    }
    if ( a.lastLogin > b.lastLogin ){
      return 1;
    }
    return 0;
}
const compareByLastLoginDesc=( a:IDataProps, b:IDataProps)=> {
    if ( a.lastLogin > b.lastLogin ){
      return -1;
    }
    if ( a.lastLogin < b.lastLogin ){
      return 1;
    }
    return 0;
}

export const sortByNameAsc=(arr:Array<IDataProps>)=>{
    arr.sort( compareByNameAsc ); 
    return arr;
}
export const sortByNameDesc=(arr:Array<IDataProps>)=>{
    arr.sort( compareByNameDesc );  
    return arr;
}
export const sortByLastLoginAsc=(arr:Array<IDataProps>)=>{
    arr.sort( compareByLastLoginAsc );  
    return arr;
}
export const sortByLastLoginDesc=(arr:Array<IDataProps>)=>{
    arr.sort( compareByLastLoginDesc );  
    return arr;
}