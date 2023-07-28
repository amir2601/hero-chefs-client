import React from "react";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";

const ChefCard = ({ chef }) => {
  const { _id, name, exp, likes, recipe_no, chef_img } = chef;
  return (
    <div className="mx-auto">
      <div className="card md:w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={chef_img} alt="Chef Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <div className="card-actions justify-between">
            <div className="badge badge-outline">Experience {exp} Years</div>
            <div className="badge badge-outline">{recipe_no} Recipe</div>
            <div className="flex items-center gap-2">
              <p>
                <BiLike></BiLike>
              </p>
              <p>{likes}</p>
            </div>
          </div>
          <Link to={`/chef/${_id}`} className="md:mt-4">
            <button className="btn btn-outline btn-sm">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
