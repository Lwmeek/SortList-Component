import React, { useState } from "react";
import Select from "react-select";
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

	let buttonsElement = buttons.map((button, index) => (
		<button
			key={button?.id}
			className="bg-unfilledInput text-navyblue text-lg rounded-lg p-4 flex justify-between gap-8 items-center w-80 h-16 mb-4"
			onClick={() => {
				if (index === button.id) {
					setExpanded(!expanded);
				}
			}}
		>
			<div className="flex gap-1">
				<p>{index + "."}</p>
				<p>{inputValue ? inputValue : "Add Skill"}</p>
			</div>
			<ChevronDownIcon className="w-5" />
		</button>
	));

	return (
		<>
			<section className="skillList-container bg-white rounded-2xl p-16">
				<div className="text-white flex gap-x-16 justify-center font-medium">
					<div className="flex flex-col">
						<Select options={SuggestedSkills} />
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
				</div>
			</section>
		</>
	);
};

export default SkillsList;
