const MessageSkeleton = () => {
	return (
		<div className="p-4 space-y-16">
			<div className="flex gap-4 items-center animate-pulse">
				<div className="skeleton bg-gray-300 w-12 h-12 rounded-full shrink-0"></div>
				<div className="flex flex-col gap-2">
					<div className="skeleton bg-gray-300 h-4 w-48 rounded"></div>
					<div className="skeleton bg-gray-300 h-4 w-36 rounded"></div>
				</div>
			</div>
			<div className="flex gap-4 items-center justify-end animate-pulse">
				<div className="flex flex-col gap-2 items-end">
					<div className="skeleton bg-gray-300 h-4 w-36 rounded"></div>
				</div>
				<div className="skeleton bg-gray-300 w-12 h-12 rounded-full shrink-0"></div>
			</div>
		</div>
	);
};

export default MessageSkeleton;
