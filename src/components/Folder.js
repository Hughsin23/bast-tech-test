
export const Folder = ({folder}) => {


    // if(!folder.children){
    //     return (
    //         <p> folder: {folder.name} size: {folder.size} </p> 
    //     )
    // }else {
       
    //     )
    // }

    return(
        <>  
            {
                folder.map( (data)=> { // pipe, it says "does children exist?" and the map returns true automatically
                    if(data.type === 'file'){
                        return <p key={data.name}> {data.name} </p>
                    }else {
                        return (
                            <div key={data.name+data.children[0].name}>
                                <h3 key={data.name + data.children[0].name}>{data.name}</h3>
                                {data.children && <Folder key={data.name} folder={data.children}/> }
                                {/* I want to call this recursively so that the folders can always render themselves, because I wanted it to be scalable for as many layers as possible */}

                                {/* think of this as passing name to the props object, that's why we need the {} around folder.name */}
                            </div>
                        )  
                    } 
                })
            }
        </>
    )
}

// the biggest thing to remember with recursive is that it works because of the base case that you check on every iteration

// 