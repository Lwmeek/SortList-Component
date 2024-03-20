import React, { useState } from "react";
import {
	ChevronDownIcon,
	PlusIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";
import { SuggestedSkills } from "../Data/SuggestedSkills";

const SkillsList = () => {
	const [expanded, setExpanded] = useState(false);
	const handleDropDown = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<div className="skillList-container bg-white rounded-2xl p-16">
				<section className="text-white flex gap-x-16 justify-center font-medium">
					<div className="flex flex-col">
						<button
							type="text"
							className="bg-unfilledInput text-navyblue text-lg rounded-lg p-4 flex gap-8 items-center"
							onClick={handleDropDown}
						>
							<p value="add">Add a Skill</p>
							<ChevronDownIcon className="w-5" />
						</button>
						{expanded ? (
							<div className="bg-black rounded-xl overflow-hidden duration-700">
								{SuggestedSkills.map(skill => (
									<li key={skill.id} className="list-none">{skill.name}</li>
								))}
							</div>
						) : (
							""
						)}
					</div>

					<div>
						<h2 className="text-navyblue font-semibold text-base">
							Suggested Skills
						</h2>
						<div>
							<PlusIcon className="text-navyblue w-4" />
							<p className="text-paleblue font-normal text-base">HTML</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default SkillsList;
