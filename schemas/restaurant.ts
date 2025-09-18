import {z} from 'zod';

export const RestaurantSchema = z.object({
    name: z.string().min(1),
    location: z.string().min(1),
    cuisines: z.array(z.string().min(1)),
    
});


export const RestaurantDetails = z.object({
    links: z.array(z.object({
        name: z.string().min(1),
        url: z.string().url()
    })
),
    contact: z.object({
        phone: z.string().min(1).optional(),
        email: z.string().email().optional(),
    }),
})

export type Restaurant = z.infer<typeof RestaurantSchema>;
export type RestaurantDetails = z.infer<typeof RestaurantDetails>;