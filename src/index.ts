export const explicitFoldingExtensionId = 'zokugun.explicit-folding';

export interface ExplicitFoldingHub {
	registerFoldingRules(language: string, rules: Array<ExplicitFoldingConfig>): void;
	unregisterFoldingRules(language: string): void;
}

export type ExplicitFoldingConfig = {
	begin?: string,
	middle?: string,
	end?: string,
	continuation?: string,
	beginRegex?: string,
	middleRegex?: string,
	endRegex?: string,
	continuationRegex?: string,
	separator?: string,
	separatorRegex?: string,
	while?: string,
	whileRegex?: string,
	indentation?: boolean,
	offSide?: boolean;
	consumeEnd?: boolean | boolean[],
	foldLastLine?: boolean | boolean[],
	foldBOF?: boolean,
	foldEOF?: boolean,
	nested?: boolean | ExplicitFoldingConfig[],
	descendants?: ExplicitFoldingConfig[],
	strict?: boolean | string,
	name?: string,
	kind?: 'comment' | 'region',
	autoFold?: boolean
};
