export function extractExcerpt(body: string, maxLength = 155): string {
	const text = body
		// remove fenced code blocks
		.replace(/```[\s\S]*?```/g, '')
		// remove inline code
		.replace(/`[^`]*`/g, '')
		// remove images
		.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
		// links → keep label text
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		// remove headings
		.replace(/^#{1,6}\s+/gm, '')
		// remove bold/italic
		.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
		// remove blockquote markers
		.replace(/^>\s*/gm, '')
		// remove horizontal rules
		.replace(/^[-*_]{3,}\s*$/gm, '')
		// remove HTML tags
		.replace(/<[^>]+>/g, '')
		// collapse whitespace
		.replace(/\s+/g, ' ')
		.trim();

	// find first sentence-like paragraph (skip very short lines)
	const paragraph = text
		.split(/\n+/)
		.map(l => l.trim())
		.find(l => l.length > 40) ?? text;

	if (paragraph.length <= maxLength) return paragraph;
	const cut = paragraph.lastIndexOf(' ', maxLength);
	return paragraph.slice(0, cut > 0 ? cut : maxLength) + '…';
}
