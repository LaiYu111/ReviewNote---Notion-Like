import IconButton from "@/components/IconButton";
import {Ellipsis, Info as InfoIcon} from "lucide-react";
import Editor from "@/components/Editor";
import clsx from "clsx";



interface HeaderContainerProps{
	className?: string
}

function HeaderContainer({className}:HeaderContainerProps){
	return (
		<div
			className={className}
		>
			<div
				className={'flex flex-row h-full items-center gap-3'}
			>
				<div>Title</div>
				<div><IconButton icon={<InfoIcon className={'icon'}/>}/></div>
				<div><IconButton icon={<Ellipsis className={'icon'}/>}/></div>
			</div>
		</div>
	)
}

interface BodyContainerProps{
	className?: string
}

function BodyContainer({className}: BodyContainerProps) {
	return (
		<div
			className={clsx(className)}
		>
			<div className={'flex flex-col gap-3'}>
				<Title className={'text-4xl font-bold py-7'} />
				<Info className={'caption'} />

				<div >
					<Editor/>
				</div>
			</div>
		</div>
	)
}

interface TitleProps {
	className?: string
}

function Title({className}: TitleProps){
	return (
		<div className={className}>
			<input placeholder={'Title'}/>
		</div>
	)
}

interface InfoProps {
	className?: string
}

function Info({className}: InfoProps){
	return (
		<div className={className}>
			<div className={'flex flex-col gap-3'}>
				<div>
					Updated Sep 27, 2024, 9:51:20 PM
				</div>
				<hr/>
				<div>
					Info
				</div>
			</div>
		</div>
	)
}

function MainContainer() {


	return (
		<div className={'h-full w-full flex flex-col'}>
			<HeaderContainer className={'h-14 px-4 border-b-2'}/>
			<BodyContainer className='mx-auto w-full max-w-4xl px-4'/>
		</div>
	)
}

export default MainContainer
