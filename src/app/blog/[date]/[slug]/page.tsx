export default function BlogPage({
	params: { date, slug },
}: {
	params: { date: string; slug: string };
}) {
	return (
		<div>
			<h1>
				BlogPage {date} \ {slug}
			</h1>
		</div>
	);
}
