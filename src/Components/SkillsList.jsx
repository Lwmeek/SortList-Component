import React, { useState } from "react";
import {
	ChevronDownIcon,
	PlusIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";
import { SuggestedSkills } from "../Data/SuggestedSkills";
import { buttons } from "../Data/Buttons";

const SkillsList = () => {
	const [expanded, setExpanded] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const handleDropDown = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<div className="skillList-container bg-white rounded-2xl p-16">
				<section className="text-white flex gap-x-16 justify-center font-medium">
					<div className="flex flex-col">
						{buttons.map((button) => (
							<button
								key={button?.id}
								className="bg-unfilledInput text-navyblue text-lg rounded-lg p-4 flex justify-between gap-8 items-center w-80 h-16 mb-4"
								onClick={handleDropDown}
							>
								<div className="flex gap-1">
									<p>
										{button?.number + '.'}
									</p>
									<p>{inputValue ? inputValue : "Add Skill"}</p>
								</div>
								<ChevronDownIcon className="w-5" />
							</button>
						))}

						{expanded ? (
							<div className="bg-unfilledInput rounded-xl overflow-hidden duration-700">
								{SuggestedSkills.map((skill) => (
									<li
										key={skill?.id}
										className={`list-none cursor-pointer text-navyblue hover:bg-bgColor ${
											skill?.name === inputValue ? "hidden" : "block"
										}`}
										onClick={() => {
											setInputValue(skill?.name);
											setExpanded(false);
										}}
									>
										{skill.name}
									</li>
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
