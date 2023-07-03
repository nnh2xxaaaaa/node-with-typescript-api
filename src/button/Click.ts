import Data from "../api/render";

const info_user = (): string => {
  return Data.map((data) => {
    return `
        <div>
            <div>
                <h3>Name: ${data.name}</h3> 
                <h3>ID: ${data.id}</h3>
                <h3>Company: ${data.company}</h3>
                <h3>Eye-color: ${data.color}</h3>
            </div>
        </div>
      `;
  }).join("");
};
console.log(typeof info_user);
export default info_user;
