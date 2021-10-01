import React from "react"
import Location from "@wkocjan/gatsby-theme-intro/src/components/sidebar/location"
import ProfileImage from "@wkocjan/gatsby-theme-intro/src/components/sidebar/profile-image"
import { arrayOf, shape, ProfileType, SocialType } from "@wkocjan/gatsby-theme-intro/src/types"
import SocialLinks from "@wkocjan/gatsby-theme-intro/src/components/social-links/social-links"

const Sidebar = ({ profile, social }) => (
  <aside className="w-full lg:w-1/3 lg:border-r border-line lg:px-6 xl:px-12">
    <div className="flex flex-col h-full " >
      <div>
        <h2 className="font-header font-light text-front text-2xl leading-none mb-4">
          {profile.profession}
        </h2>
        <h1 className="font-header font-black text-front text-5xl leading-none break-words mb-6">
          {profile.name}
        </h1>
        {profile.image && (
          <ProfileImage image={profile.image} name={profile.name} />
        )}
        <br />
        {profile.location && (
          <Location
            location={profile.location}
            relocation={profile.relocation}
          />
        )}
      </div>
      <br/>

      <div className="pt-8 pb-12 lg:py-0">
        <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
          Connect
        </h5>
        <SocialLinks social={social} />
        {/* <div className="pt-8 lg:py-5"> 
          <button className="bg-red-600 hover:bg-red-400 text-white py-2 px-5 rounded inline-flex items-center">
          <button className=" py-2 px-5 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.1 451.1">
            <path d="M226 354l145-145-49-48-64 65V0h-65v226l-64-65-48 48zM0 387h451v64H0z"/></svg>            
            <a className="font-header font-bold text-l px-1 text-white" href="/resume.pdf" download> Resume </a>
          </button>
        </div> */}
      </div>
    </div>
  </aside>
)

Sidebar.propTypes = {
  profile: shape(ProfileType),
  social: arrayOf(shape(SocialType)),
}
console.log("NVM Mee")
export default Sidebar