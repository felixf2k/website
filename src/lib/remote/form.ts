import {
	error,
	isValidationError,
	type InvalidField,
	type RemoteForm,
	type RemoteFormInput,
	type RemoteQuery,
	type RemoteQueryOverride
} from '@sveltejs/kit';

type FormCallback<In, Out> = (data: In, issues: InvalidField<In>) => Promise<Out>;

export const formCallback = <In, Out>(callback: FormCallback<In, Out>): FormCallback<In, Out> => {
	return async (data, invalid) => {
		try {
			return await callback(data, invalid);
		} catch (e) {
			console.log(e);
			if (isValidationError(e)) throw e;

			return error(500, { message: 'Server Error' });
		}
	};
};

type Formsubmit = () => Promise<void> & {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	updates: (...queries: Array<RemoteQuery<any> | RemoteQueryOverride>) => Promise<void>;
};

type EnhanceFunction = (props: { form: HTMLFormElement; submit: Formsubmit }) => Promise<void>;

interface FormEnhanceProps<In extends RemoteFormInput, Out> {
	form: RemoteForm<In, Out>;
	onSuccess?: (result: Out | undefined, form: HTMLFormElement) => void;
	onError?: (error: unknown, form: HTMLFormElement) => void;
}

export function enhanceForm<In extends RemoteFormInput, Out>(
	props: FormEnhanceProps<In, Out>
): EnhanceFunction {
	return async ({ submit, form }) => {
		try {
			await submit();
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const issues = (props.form.fields as any).allIssues?.();
			if (!issues || issues.length === 0) {
				props.onSuccess?.(props.form.result, form);
			}
		} catch (error) {
			props.onError?.(error, form);
		}
	};
}
