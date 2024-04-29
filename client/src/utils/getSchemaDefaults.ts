import z from "zod";

export default function getSchemaDefaults<Schema extends z.ZodType>(schema: Schema): Record<string, z.ZodTypeAny> {
    if (schema instanceof z.ZodObject) {
        const objectSchema = schema as z.AnyZodObject;
        return Object.fromEntries(
            Object.entries(objectSchema.shape).map(([key, value]) => {
                if (value instanceof z.ZodDefault) return [key, value._def.defaultValue()];
                return [key, undefined];
            }),
        );
    } else if (schema instanceof z.ZodIntersection) {
        const interSchema = schema as z.ZodIntersection<z.ZodTypeAny, z.ZodTypeAny>;
        return { ...getSchemaDefaults(interSchema._def.left), ...getSchemaDefaults(interSchema._def.right) };
    }
    return {};
}
