import React from "react";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/solid";

const SkillsList = () => {
	return (
		<>
			<div className="skillList-container bg-white rounded-2xl p-16">
				<section className="text-white flex gap-x-16 justify-center">
					<button className="bg-navyblue text-lg font-medium rounded-lg p-4">
						JavaScript
					</button>
					<div>
						<h2 className="text-navyblue font-semibold text-base">
							Suggested Skills
						</h2>
						<p className="text-paleblue font-normal text-base">HTML</p>
						<ChevronDownIcon className="text-navyblue w-5" />
                        <PlusIcon className="text-navyblue w-4"/>
					</div>
				</section>
			</div>
		</>
	);
};

export default SkillsList;
