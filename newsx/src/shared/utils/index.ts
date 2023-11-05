export const formattedDates = (date: string, style: "medium" | "full" | "long" | "short" | undefined) => {
	return new Intl.DateTimeFormat("pt-BR", { dateStyle: style, }).format(new Date(parseInt(date)));
};