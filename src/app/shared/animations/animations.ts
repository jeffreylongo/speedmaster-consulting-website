import { 
  trigger, 
  transition, 
  style, 
  query, 
  animateChild,
  group,
  animate 
} from '@angular/animations';

/**
 * Route animation for smooth transitions between pages
 */
export const slideInAnimation = trigger('routeAnimations', [
  // Default transition
  transition('* <=> *', [
    // Initial state for entering route
    query(':enter', [
      style({
        position: 'absolute',
        width: '100%',
        opacity: 0,
        transform: 'translateY(20px)'
      })
    ], { optional: true }),
    
    // Current route that will be left
    query(':leave', [
      style({
        position: 'absolute',
        width: '100%',
        opacity: 1,
        transform: 'translateY(0)'
      })
    ], { optional: true }),
    
    // Animate the leaving route out
    query(':leave', [
      animate('300ms ease-out', 
        style({ 
          opacity: 0,
          transform: 'translateY(-20px)'
        })
      )
    ], { optional: true }),
    
    // Animate the new route in
    query(':enter', [
      animate('300ms ease-out', 
        style({ 
          opacity: 1,
          transform: 'translateY(0)'
        })
      )
    ], { optional: true }),
    
    // Run child animations
    query(':enter', animateChild(), { optional: true })
  ]),
  
  // Specific transitions between named routes
  transition('HomePage => AboutPage', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true })
    ])
  ]),
  
  transition('AboutPage => HomePage', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true })
    ])
  ]),
  
  transition('AboutPage => ServicesPage', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true })
    ])
  ]),
  
  transition('ServicesPage => ContactPage', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('500ms ease-out', style({ transform: 'translateY(-100%)' }))
      ], { optional: true })
    ])
  ])
]);
