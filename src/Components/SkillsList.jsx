import React, { useState } from "react";
import {
	ChevronDownIcon,
	PlusIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";

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
							className="bg-unfilledInput text-navyblue text-lg rounded-lg p-4 flex gap-8 items-center"
							onClick={handleDropDown}
						>
							<p value="add">Add a Skill</p>
							{expanded ? (
								<XMarkIcon className="w-5" />
							) : (
								<ChevronDownIcon className="w-5" />
							)}
						</button>
						{expanded ? (
							<div className="options bg-black rounded-xl overflow-hidden duration-700">
								<option
									className="hover:bg-paleblue hover:cursor-pointer hover:duration-300"
									value="hi"
								>
									hi
								</option>
								<option
									className="hover:bg-paleblue hover:cursor-pointer hover:duration-300"
									value="bye"
								>
									bye
								</option>
								<option
									className="hover:bg-paleblue hover:cursor-pointer hover:duration-300"
									value="yes"
								>
									yes
								</option>
								<option
									className="hover:bg-paleblue hover:cursor-pointer hover:duration-300"
									value="no"
								>
									no
								</option>
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
