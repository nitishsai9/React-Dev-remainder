import React from 'react';

const List = (props)=>{
	const user = props.user_d;
	return <>
	{

		user.map((mp)=>{
			const {id,name,image,age}= mp;
			console.log(image);
			return <div className="person">
				<img src={image} />
				<h4>{name}- {age}</h4>
			</div>;

		})	
	}


	</>;

};


export default List;